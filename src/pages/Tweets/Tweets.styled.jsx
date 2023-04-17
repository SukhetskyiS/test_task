import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: block;
  width: 150px;
  margin: 30px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #ebd8ff;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    background-color: #373737;
    color: #ebd8ff;
  }
`;

export const User = styled.li`
  position: relative;
  width: 380px;
  height: 460px;

  margin: 0 auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px
    rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Picture = styled.img`
  width: 308px;
  height: 168px;
  object-fit: contain;
  margin: 28px 36px 88px 36px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;
export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Ellipse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  background: #5736a3;
  object-fit: contain;
`;

export const UserTweets = styled.p`
  margin: 0 auto 16px auto;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin: 0 auto 26px auto;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Status = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  margin: 0 auto 36px auto;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;

  background: ${(props) =>
    props.isFollowing ? "#5CD3A8" : "#ebd8ff"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
`;
