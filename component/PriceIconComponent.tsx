import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { BsCurrencyDollar } from "react-icons/bs";

import { definitions } from "../type/supabase";

const buildTooltipDescription = (price: number) => {
    const { t } = useTranslation("common");

    const table = [
        t("priceIcon.free"),
        t("priceIcon.low"),
        t("priceIcon.medium"),
        t("priceIcon.high"),
    ];

    return table[price];
};

const PriceIcon = ({
    price,
    fontSize,
}: Pick<definitions["activity"], "price"> & { fontSize?: string }) => {
    return (
        <Tooltip
            hasArrow
            label={buildTooltipDescription(price)}
            bg={price === 0 ? "green.600" : ""}
        >
            <Box>
                {Array(3)
                    .fill("")
                    .map((_, i) => (
                        <Icon
                            fontSize={fontSize ?? "30px"}
                            as={BsCurrencyDollar}
                            key={`${i}_price`}
                            color={i < price ? "gray.600" : "gray.200"}
                        />
                    ))}
            </Box>
        </Tooltip>
    );
};

export default PriceIcon;