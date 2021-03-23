/** @jsx jsx */
import { Flex, Box, jsx } from "theme-ui";
import { Icon } from "@makerdao/dai-ui-icons";
import Link from "@modules/navigation/Link";

import { useTranslation } from "@modules/localization";
import { getLinkIcon } from "@modules/navigation";

const socialLinks = {
  "Twitter": "https://twitter.com/kernel0x",
  "Chat": "https://kernel-community.slack.com/",
  "Youtube": "https://www.youtube.com/watch?v=AdmuZalNPIQ&list=PLvTrX8LNPbPk3yfCY1uuPsiBgpxaO_G8-"
}

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      sx={{
        bg: "backgroundAlt",
      }}
    >
      <Flex
        className="footer-content"
        sx={{
          px: ["26px", "26px", "52px"],
          pt: ["40px", "40px", "54px"],
          pb: ["119px", "119px", "54px"],
          flexDirection: ["column", "column", "unset"],
          maxWidth: "1364px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            color: "onBackgroundAlt",
            display: "inline-block",
            width: "217px",
            "& > *, & svg": { color: "onBackgroundAlt" },
          }}
        >
          <Link
            to="/"
            sx={{
              display: "inline-block",
              mb: "31px",
            }}
            aria-label={t("aria_MakerFooterLogo")}
          >
            <Icon
              name="makerLogo"
              sx={{ width: "217px", height: "30px", display: "block" }}
            />
          </Link>
          <Box
            sx={{
              "& > *:not(:last-of-type)": { mr: "18px" },
              "& > a": { mr: 0 },
            }}
          >
            {Object.keys(socialLinks).map((s, index) => getLinkIcon(socialLinks[s], `footer-social-link-${index}`))}
          </Box>
        </Box>
        <div
          sx={{
            ml: ["unset", "unset", "5vw"],
            mt: ["56px", "56px", "unset"],
            display: "inline-block",
            width: ["100%", "100%", "calc(100% - 106px - 217px)"],
            verticalAlign: "top",
            "& > * > ul": {
              m: 0,

              p: 0,
              color: "text",
              listStyleType: "none",

              display: "flex",
              flexWrap: ["wrap", "wrap", "unset"],
              "& > li:not(:last-of-type)": {
                mr: ["unset", "unset", "5vw"],
              },
              "& > li": {
                fontWeight: "500",
                flexShrink: 0,
                flex: ["0 50%", "0 50%", 1],
                width: ["calc(50% - 66px)", "calc(50% - 66px)", "unset"],
                pr: ["66px", "66px", "unset"],
                mb: ["64px", "64px", "unset"],
                color: "onBackgroundAlt",
                "& > ul": {
                  p: 0,
                  mt: 3,
                  listStyleType: "none",
                  "& li a": {
                    color: "onBackgroundAlt",
                    fontWeight: "normal",
                  },
                  "& li:not(:last-of-type)": {
                    mb: "10px",
                  },
                },
              },
            },
          }}
        >
          <div sx={{ flex: 1 }}>
            <ul>
              <li>
                <span sx={{ mt: 0 }}>{t("Resources", "Footer")}</span>

                <ul>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"https://docs.google.com/document/d/1jzC80rezK0bC75qVoEsg4Pn0Pw8XX0YO_4H6iw03bJ0/edit?usp=sharing"}
                    >
                      {t("Whitepaper", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"/start/faq"}
                    >
                      {t("FAQs", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={
                        "https://www.figma.com/file/3M7u7xOSVM2a1h4HPEUxyh/Kernel_Mod?node-id=1%3A4707"
                      }
                    >
                      {t("Brand_Assets", "Footer")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>{t("Community", "Footer")}</span>
                <ul>
                  <li>
                    <Link hideExternalIcon to={"/team/"}>
                      {t("Team", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"https://github.com/kernel-community/kernel-v2"}>
                      {t("Contribute", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      hideExternalIcon
                      to={"/start/faq/#contact"}
                    >
                      {t("Contact", "Footer")}
                    </Link>
                  </li>
                  <li>
                    <Link hideExternalIcon to={"/blog/"}>
                      {t("Blog", "Footer")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
