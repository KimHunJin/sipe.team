import styled from '@emotion/styled';

export const Wrapper = styled.div<{ flex: number }>`
  width: 100%;
  height: 365px;
  border-radius: 32px;
  padding: 34px 33px;
  flex: ${({ flex }) => flex};
  background-color: ${({ theme }) => theme.colors.gray04};
  color: ${({ theme }) => theme.colors.black222};
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black111};
  font-family: 'Pretendard-ExtraBold';
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 26.5px;
`;

export const List = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 57.5px;

  & > li {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    font-size: 16px;
    line-height: 140%;
    flex: 1;
    display: flex;
    align-items: center;
    list-style-type: decimal;
    &::before {
      content: '•';
      font-size: 108%;
      margin-left: 0.5px;
      margin-right: 16px;
    }
  }
`;