import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const { data: session }: any = useSession();
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      if (!session?.user.id) {
        router.replace("/");
      } else {
        setVerified(true);
      }
    }, [session?.user]);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
