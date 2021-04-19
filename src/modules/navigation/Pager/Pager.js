/** @jsx jsx */
import { Box, Flex, jsx } from "theme-ui";
import { Link } from "@modules/navigation";
import styled from "@emotion/styled";
import { Icon } from "@makerdao/dai-ui-icons";
import { motion } from "framer-motion";

import { useTranslation } from "../../localization";
import { useMemo } from "react";
import { Boolean, console, Error } from "window-or-global";
import { findPreviousAndNextSections } from "./pager-utils";

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
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

const AnimatedIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const restTransition = {
  duration: 0.3,
  type: "spring",
  ease: "easeIn",
  damping: 8,
};

const hoverTransition = {
  duration: 0.3,
  type: "spring",
  ease: "easeOut",
  damping: 7,
  stiffness: 150,
};

const arrowRightMotion = {
  rest: {
    x: 0,
    transition: restTransition,
  },
  hover: {
    x: 10,
    transition: hoverTransition,
  },
};

const arrowLeftMotion = {
  rest: {
    x: 0,
    transition: restTransition,
  },
  hover: {
    x: -10,
    transition: hoverTransition,
  },
};

export const Pager = (props) => {
  const {
    sidenavData: { items },
    pagePath,
  } = props;
  const [currentSection] = items;
  const { t } = useTranslation();

  const { nextSection, previousSection } = useMemo(() => {
    if (!!currentSection) {
      return findPreviousAndNextSections(currentSection, pagePath);
    }
    return {};
  }, [currentSection, pagePath]);

  return (
    <Wrapper>
      <Flex
        sx={{
          justifyContent: "space-between",
          py: ["20px", "20px", "14px"],
          px: ["10px"],
          maxWidth: "1364px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {Boolean(previousSection) ? (
          <motion.div whileHover="hover">
            <PagerButton
              to={previousSection.url}
              sx={{
                color: "text",
              }}
            >
              <PagerDirectionText>
                <AnimatedIconWrapper variants={arrowLeftMotion}>
                  <Icon
                    sx={{
                      transform: "rotate(180deg)",
                      marginRight: "3px",
                    }}
                    size={18}
                    name="arrow_right"
                  />
                </AnimatedIconWrapper>
                {t("Previous")}
              </PagerDirectionText>
              <PagerModuleTitle>{previousSection.title}</PagerModuleTitle>
            </PagerButton>
          </motion.div>
        ) : (
          <span />
        )}

        {Boolean(nextSection) ? (
          <motion.div whileHover="hover">
            <PagerButton
              to={nextSection.url}
              sx={{
                color: "text",
              }}
            >
              <PagerDirectionText>
                {t("Next")}
                <AnimatedIconWrapper variants={arrowRightMotion}>
                  <Icon
                    size={18}
                    name="arrow_right"
                    sx={{
                      marginLeft: "3px",
                    }}
                  />
                </AnimatedIconWrapper>
              </PagerDirectionText>
              <PagerModuleTitle>{nextSection.title}</PagerModuleTitle>
            </PagerButton>
          </motion.div>
        ) : (
          <span />
        )}
      </Flex>
    </Wrapper>
  );
};
