// components/WithRole.tsx
import React from "react";
import { auth } from "@clerk/nextjs/server";
import Unauthorized from "@/components/Unauthorized";

const withRole = (
  WrappedComponent: React.ComponentType,
  requiredRole: string
) => {
  return (props: any) => {
    const { has } = auth();

    const canAccess = has({ role: requiredRole });
    console.log(canAccess);

    if (!canAccess) return <Unauthorized />;

    return <WrappedComponent {...props} />;
  };
};

export default withRole;
