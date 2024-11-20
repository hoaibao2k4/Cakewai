import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '~/redux/apiRequest';

function SignUpForm() {
  const [hidden, setHidden] = useState({
    password: true,
    confirm: true,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPass, setConfirmPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  //const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState('');
  //const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hiddenPassword = (field) => {
    setHidden((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      // confirmPass: confirmPass,
      role_id: '127coi1579zx5c',
    };
    registerUser(dispatch, newUser, navigate);
  }
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return 'Email không được để trống';
    } else if (!emailRegex.test(value)) {
      return 'Hãy nhập Email';
    }
    return ''; 
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (value.length >= 12 && value.length <= 15){
      setPasswordStrength('strong');
    } else if (value.length >= 9 && value.length <12){
      setPasswordStrength ('fair');
    } else if(value.length < 9){
      setPasswordStrength('warning');
    } else if (value.length > 15){
      setPasswordStrength('notenough');
    }else{
      setPasswordStrength('');
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'strong':
        return 'text-green-500';
      case 'fair':
        return 'text-orange-500';
      case 'warning':
        return 'text-red-500';
      case 'notenough':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const validateName = (nameValue) => {
    let error = '';
    const hasSpecialChars = /[^\p{L}\d\s]/u.test(nameValue); // Kiểm tra ký tự đặc biệt
    const letterCount = (nameValue.match(/\p{L}/gu) || []).length; // Đếm số ký tự chữ
    const digitCount = (nameValue.match(/\d/g) || []).length; // Đếm số ký tự số

    if (/^\d+$/.test(nameValue)) {
      error = 'Bạn có chắc nhập đúng tên của mình không';
    } else if (letterCount < 3) {
      error = 'Tên cần ít nhất 3 ký tự chữ';
    } else if (hasSpecialChars) {
      error = 'Tên không được chứa ký tự đặc biệt';
    } else if (letterCount >= 3 && digitCount > 8) {
      error = 'Tên không nên chứa quá nhiều ký tự số';
    }

    return error;
  };

    const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let isValid = true;

    const nameValidationError = validateName(name);
    setNameError(nameValidationError);
    if (nameValidationError) {
      isValid = false;
    }

    const emailValidationError = validateEmail(email);
    setEmailError(emailValidationError);
    if (emailValidationError) {
      isValid = false;
    }

    

    if (password !== confirmPassword) {
      setConfirmError('Mật khẩu không trùng khớp');
      isValid = false;
    } else {
      setConfirmError('');
    }

    if (isValid) {
      alert('Đăng ký thành công');
    }
  };

  return (
    <div className="absolute right-20 top-5 h-[90%] w-4/12 rounded-3xl bg-gray-100">
      <div className="mx-12">
        <h2 className="my-4 text-center text-3xl font-semibold">Register</h2>
        <p className="my-2 mb-4 text-center text-sm font-normal">
          Create your account. It's free and only take a minute{' '}
        </p>
        <form action="" className="flex flex-col items-center " onSubmit={handleLogin} >
          <div className="relative my-3">
            <input
              type="name"
              name="name"
              id="name"
              className={`peer block w-[20rem] appearance-none rounded-lg border ${
                isSubmitted && nameError ? 'border-red-500' : 'border-gray-300'
              } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none`}              
              placeholder=" "
              tabIndex={1}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError(''); 
              }}
            />
            <label
              htmlFor="name"
              className="absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Your name
            </label>
            {isSubmitted && nameError && (
              <p className="absolute -top-5 left-0 text-xs text-red-500 mb-1">
                * {nameError}
              </p>
            )}
          </div>
          <div className="relative my-3">
            <input
              type="text"
              name="email"
              id="email"
              className={`peer block w-[20rem] appearance-none rounded-lg border ${
                emailError ? 'border-red-500' : 'border-gray-300'
              } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}              
              placeholder=" "
              tabIndex={2}
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(''); 
                }
              }
            />
            <label
              htmlFor="email"
              className={`absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm ${
                emailError ? 'text-red-500' : 'text-gray-500'
              } duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`}
             >
              Email
            </label>
            {emailError && (
              <p className="absolute -top-5 left-0 text-xs text-red-500 mb-1">
                * {emailError}
              </p>
            )}
          </div>
          <div className="relative my-3">
            <input
              type={hidden.password ? 'password' : 'text'}
              name="password"
              id="password"
              className="peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
              placeholder=" "
              tabIndex={3}
              value={password}
              onChange={(e) => {
                validatePassword(e.target.value)
                setPassword(e.target.value)

              }}
            />

            <label
              htmlFor="password"
              className="absolute start-1 top-2 z-0 flex origin-[0] -translate-y-4 scale-75 transform items-center justify-between bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Password
            </label>
            <i
              className="absolute right-2 top-1/2 mx-1 -translate-y-1/2 cursor-pointer hover:text-slate-900"
              onClick={() => hiddenPassword('password')}
            >
              {hidden.password === true ? <FaEyeSlash className="text-slate-500" /> : <FaEye />}
            </i>
            {password && (
              <p className={`absolute -top-5 left-0 text-xs  mb-1 ${getStrengthColor()}`}>
                * {passwordStrength === 'strong'
                  ? 'Bảo mật: An toàn'
                  : passwordStrength === 'fair'
                  ? 'Bảo mật: Khá'
                  : passwordStrength === 'warning'
                  ? 'Bảo mật: Không an toàn'
                  : 'Độ dài mật khẩu không quá 15 ký tự!!!'
                }
              </p>
            )}
          </div>
          <div className="relative my-3">
            <input
              type={hidden.confirm ? 'password' : 'text'}
              name="confirm"
              id="confirm"
              className={`peer block w-[20rem] appearance-none rounded-lg border ${
                confirmError ? 'border-red-500' : 'border-gray-300'
              } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none`}
              placeholder=" "
              tabIndex={4}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label
              htmlFor="confirm"
              className="absolute start-1 top-2 z-0 flex origin-[0] -translate-y-4 scale-75 transform items-center justify-between bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Confirm password
            </label>
            <i
              className="absolute right-2 top-1/2 mx-1 -translate-y-1/2 cursor-pointer hover:text-slate-900"
              onClick={() => hiddenPassword('confirm')}
            >
              {hidden.confirm === true ? <FaEyeSlash className="text-slate-500" /> : <FaEye />}
            </i>
            {confirmError && (
              <p className="absolute -top-5 left-0 text-xs text-red-500 mb-1">
                * {confirmError}
              </p>
            )}
          </div>

          <div className="my-4 w-[20rem] rounded-xl bg-primary text-center">
            <button type="submit" className="font-n h-10 text-lg text-slate-100">
              Register
            </button>
          </div>
        </form>
        <div className="grid w-full grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-800" />
          <p className="text-center">Or</p>
          <hr className="border-gray-800" />
        </div>
        <button className="my-2 flex w-full items-center justify-center rounded-xl border bg-white py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
            x="0px"
            y="0px"
            width="25px"
            height="25px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Login with Google
        </button>
        <div className="flex w-full justify-center gap-1 pt-2 text-sm font-light">
          <p>Already have an account?</p>
          <a href="/auth?mode=signin" className="hover:text-blue-700">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
