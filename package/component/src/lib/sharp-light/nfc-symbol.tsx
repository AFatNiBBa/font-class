
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-light nfc-symbol}
 * @preview ![nfc-symbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-symbol.svg)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.8 40.1l-8.7-8.1L126.8 38C51.2 81.8 0 161.9 0 256c0 90.9 47.8 170.3 119.5 215.2l13.6 8.5 17-27.1L136.5 444C73.7 404.7 32 335.4 32 256c0-77.7 40-144.7 100.9-184.2L309.1 235.7l11.7 10.9 21.8-23.4-11.7-10.9L145.8 40.1zM367.3 472.2l8.7 8 10.2-5.9C461.9 430.5 513.1 350 513.1 256c0-91.4-48.4-170.5-120.6-215.2l-13.6-8.4L362 59.6 375.6 68C439 107.2 481.1 176.3 481.1 256c0 77.8-40 145-100.9 184.5L202.9 276.3l-11.7-10.9-21.7 23.5 11.7 10.9L367.3 472.2z" />
    </Icon>
);

export default NfcSymbol;