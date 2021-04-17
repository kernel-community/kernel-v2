/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import { Link } from "@modules/navigation";
import styled from "@emotion/styled";
import { Icon } from "@makerdao/dai-ui-icons";

import { useTranslation } from "../localization";

const Wrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
`;

const PagerButton = styled(Link)``;

const PagerDirectionText = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`;
const PagerModuleTitle = styled.h2`
  margin: 0;
`;

export const Pager = (props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Flex
        sx={{
          justifyContent: "space-between",
          px: ["26px", "26px", "52px"],
          py: ["20px", "20px", "34px"],
          maxWidth: "1364px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <PagerButton to={`/`}>
          <PagerDirectionText>
            <Icon
              sx={{
                transform: "rotate(180deg)",
                marginRight: "3px",
              }}
              size={18}
              name="arrow_right"
            />
            {t("Previous")}
          </PagerDirectionText>
          <PagerModuleTitle>Money & Speech</PagerModuleTitle>
        </PagerButton>
        <PagerButton to={`/`}>
          <PagerDirectionText>
            {t("Next")}
            <Icon
              size={18}
              name="arrow_right"
              sx={{
                marginLeft: "3px",
              }}
            />
          </PagerDirectionText>
          <PagerModuleTitle>Debt</PagerModuleTitle>
        </PagerButton>
      </Flex>
    </Wrapper>
  );
};
