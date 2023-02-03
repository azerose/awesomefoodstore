import styled from "@emotion/styled";

const LayoutFooter = () => {
  return (
    <Wrapper>
      <div>Copyright @ 2020 이정우</div>
      <div>깃허브:https://github.com/azerose</div>
    </Wrapper>
  );
};

export default LayoutFooter;

const Wrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
