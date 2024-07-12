import SignInForm from '@/components/Authentication/SignInForm';
import { useCsrfTokenQuery } from '../../redux/api/authApi';

export default function SignIn() {
  useCsrfTokenQuery(undefined, {refetchOnMountOrArgChange:true})

  return (
    <>
      <SignInForm />
    </>
  );
}
