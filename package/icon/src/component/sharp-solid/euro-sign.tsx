
import { Icon } from "../../index";

/**
 * A component that renders the `euro-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/euro-sign?s=sharp-solid euro-sign}
 * @preview ![euro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/euro-sign.svg)
 */
const EuroSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48.6 240c-.4 5.3-.6 10.6-.6 16s.2 10.7 .6 16L0 272l0 64 62.7 0C94.9 420.2 176.5 480 272 480l48 0 0-64-48 0c-59.2 0-110.9-32.2-138.6-80L288 336l0-64-175.2 0c-.5-5.3-.8-10.6-.8-16s.3-10.7 .8-16L288 240l0-64-154.6 0c27.7-47.8 79.4-80 138.6-80l48 0 0-64-48 0C176.5 32 94.9 91.8 62.7 176L0 176l0 64 48.6 0z" />
    </Icon>
);

export default EuroSign;