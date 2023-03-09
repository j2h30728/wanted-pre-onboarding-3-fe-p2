import React, { useCallback, useEffect, useRef, useState } from "react";
import { getCurrentUserInfo, login } from "../../api/login";
import { UserInfo } from "../../types/user";

const AutoLogin = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const isDataFetched = useRef(false);

  const getUserInfo = useCallback(async () => {
    // TODO: 유저 정보 가져오기 (getCurrentUserInfo 함수 사용)
    // getCurrentUserInfo 함수를 이용해 유저 정보를 가져온 후, setUserInfo 함수를 이용해 userInfo 상태를 업데이트해주세요.
    isDataFetched.current = true;
    const userInfoRes = await getCurrentUserInfo();
    setUserInfo(userInfoRes);
  }, []);

  useEffect(() => {
    if (isDataFetched.current) return;
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>Another page</h1>
      <div>
        <h2>User info</h2>
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};

export default AutoLogin;
/*
  interface Body {
    readonly body: ReadableStream<Uint8Array> | null;
    readonly bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}
*/
