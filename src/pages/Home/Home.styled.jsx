import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const User = styled.li`
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px
    rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Avatar = styled.img`
  width: 308px;
  height: 168px;
  object-fit: contain;
  margin: 28px 36px 48px 36px;
`;

export const Name = styled.h2`
  margin: 0 auto 16px auto;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Tweets = styled.p`
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

export const Status = styled.p`
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

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #fff;
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  cursor: pointer;
`;

export const LoadMoreButton = styled.button`
  display: block;
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
