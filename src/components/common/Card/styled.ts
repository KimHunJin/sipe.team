import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  gap: 32px;
  display: inline-flex;
`;

export const CardWrapper = styled.div`
  width: 192px;
  height: 100%;
  padding: 32px 20px;
  background: #1a202c;
  border-radius: 12px;
  overflow: hidden;
  border: 1px #2d3748 solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: inline-flex;
`;

export const Title = styled.div`
  align-self: stretch;
  text-align: center;
  color: white;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.4px;
  word-wrap: break-word;
`;

export const HighLightTitle = styled.div`
  align-self: stretch;
  padding: 8px 16px;
  background: #2d3748;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  text-align: center;
  color: #01ff13;
  font-size: 12px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0.3px;
  word-wrap: break-word;
`;

export const SubTitle = styled.div`
  align-self: stretch;
  text-align: center;
  color: #e2e8f0;
  font-size: 14px;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 19.6px;
  word-wrap: break-word;
`;