export default {
  host: "http://localhost",
  port: 4000,
  urlDB:
    "mongodb+srv://auth_api:Zn0InTwA7WVSMzKL@cluster0.f5zpj.mongodb.net/test",
  saltRound: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateJWTKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgHq8JF+ZXMIYogwqP5bmBYWtJpBsN6svaVlW9+oqFf/8XBaiSRgK
3dWKH5CIbh72wY1/QdvsL2xvqzdQ9Incrzb8uz7quL6sAc07z1lzEorgF7gAxwSp
IQfGCnc9zqxUTXE4ti6OXB0fwtVEvZVgp5vrbdLZAhCOlAFWRTQ/9P5VAgMBAAEC
gYAPeA8NjYLHY9totRp2pl8jzgMCSOFrTfp1LCTq+orzTJc+sw2LXjM/ar03tjpK
5MbYUqW2VjpT7G8j9awchBgBJBr+W72ruq5aPsK2gLpZeay93uaFZgWCVl1Kj4Z3
gIdy0OauaazJp61tC+kVBDbFGJpMseaspMqpHjzg50N0AQJBAOOjU6mRXoQomDiK
Q3ULDXzg1Wg7/w842WgvZhn22LYOAIccm/bz9ArOfqnrVJoZ1Dp6hZum2mToVsUb
tx8XOkECQQCKBtvMH9Rt85WNOEcaJO01ZoEKtUllgEhHzOfVFvU+0p0wQHVyfQIj
+8EN7KFPDW30qEJS8mCTz67BE7JOuXcVAkApOsXGapvx1+BqLTC2nD/fJGHCtUsn
GKbX5e3aOglaQAL8dcQR4HGNG4V5hTQXjSIRTWuxm3Dm4eYFYVWzfeOBAkAmuG/W
nqNISQoOONhxdCR7U4slxt+VMtyUD96Ff9BC1HC2RY7tFDaSg6CP2G8ULy9GcCFT
BZ2kOaHLlkvyG8NVAkB2Yyfu/bLpVbCzed8h/l5/lXhUSB2JiT6zpK8FapM8ShBT
E5DhcP9P2qp4j06Dj7AzaxjkRI89QMk1lfuqMIsd
  -----END RSA PRIVATE KEY-----`,
  publicJWTKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHq8JF+ZXMIYogwqP5bmBYWtJpBs
N6svaVlW9+oqFf/8XBaiSRgK3dWKH5CIbh72wY1/QdvsL2xvqzdQ9Incrzb8uz7q
uL6sAc07z1lzEorgF7gAxwSpIQfGCnc9zqxUTXE4ti6OXB0fwtVEvZVgp5vrbdLZ
AhCOlAFWRTQ/9P5VAgMBAAE=
  -----END PUBLIC KEY-----`,
};
