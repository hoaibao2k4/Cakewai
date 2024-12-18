import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleIcon } from '~/assets/icons';
import { registerUser } from '~/redux/apiRequest';
import { BE_BASE_URL } from '~/services/axios';
function SignUpForm() {
  const [hidden, setHidden] = useState({
    password: true,
    confirm: true,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmError, setConfirmError] = useState('');
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

    const handleRegister = (e) => {
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
      handleSubmit(e);
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = `${BE_BASE_URL}/api/public/google/login`;
  };
  const location = useLocation()
  useEffect(() => {
    if (window.innerWidth >= 1024)
    window.scrollTo({
      top: 66,
      behavior: 'smooth'
    })
  },[location])
  return (
    <div className="flex flex-col justify-center items-center   min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-25rem)] lg:min-h-[calc(100vh-36rem)] py-2 md:py-4 lg:py-8  lg:justify-start  ">
      <div className="absolute top-1/2 transform -translate-y-1/2  md:absolute md:top-1/2  lg:absolute lg:right-20 lg:top-1/2  flex flex-col items-center justify-center  sm:w-6.5/12  md:w-6/12 lg:w-4/12   rounded-3xl bg-gray-100 p-6 shadow-md transition-all duration-500   ml-auto  ">
        <h2 className="my-4 text-center text-3xl font-semibold">Đăng kí</h2>
        <p className="my-2 mb-4 text-center text-sm font-normal">
        Tạo tài khoản của bạn ngay. Miễn phí và chỉ mất một phút!{' '}
        </p>
        <form action="" className="flex flex-col items-center w-full px-4" onSubmit={e =>handleRegister(e)} >
          <div className="relative my-3">
            <input
              type="name"
              name="name"
              id="name"
              className={`peer block w-[20rem] appearance-none rounded-lg border ${
                isSubmitted && nameError ? 'border-red-500' : 'border-gray-300'
              } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}              
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
              Tên của bạn
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
              Mật khẩu
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
              Xác nhận mật khẩu
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
            <button type="submit" className="font-n h-10 text-lg text-slate-100 w-full">
              Đăng kí
            </button>
          </div>
        </form>
        <div className="grid w-full grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-800" />
          <p className="text-center">Hoặc</p>
          <hr className="border-gray-800" />
        </div>
        <button onClick={handleGoogleLogin} className="my-2 flex w-full items-center justify-center rounded-xl border bg-white py-2">
          <GoogleIcon className='mr-2'/>
          Đăng nhập với Google
        </button>
        <div className="flex w-full justify-center gap-1 pt-2 text-sm font-light">
          <p>Đã có tài khoản?</p>
          <a href="/auth?mode=signin" className="hover:text-blue-700">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
