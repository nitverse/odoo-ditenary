import { auth } from '@clerk/nextjs/server';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const withRole = (Page, requiredPermission) => {
  return function RoleProtectedPage(props) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkAuthorization = async () => {
        try {
          const { has } = auth();
          const canManage = has({ permission: requiredPermission });

          if (canManage) {
            setIsAuthorized(true);
          } else {
            router.replace('/401');
          }
        } catch (error) {
          router.replace('/401');
        } finally {
          setIsLoading(false);
        }
      };

      checkAuthorization();
    }, []);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-lg font-semibold text-gray-800">Loading...</div>
        </div>
      )
    }

    return isAuthorized ? <Page {...props} /> : null;
  };
};

export default withRole;
