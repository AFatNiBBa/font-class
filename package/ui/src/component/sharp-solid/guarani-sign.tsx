
import { Icon } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=sharp-solid guarani-sign}
 * @preview ![guarani-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/guarani-sign.svg)
 */
const GuaraniSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L160 0l0 66.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3l0 66.7 64 0 0-66.7c90.8-15.2 160-94.2 160-189.3l0-32-32 0-128 0 0-92c22.1 5.7 41.8 17.1 57.6 32.6l44.8-45.7C299 92 263.5 73.3 224 66.7L224 0zM160 132L160 380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124zM224 380l0-92 92 0c-11.6 45-47 80.4-92 92z" />
    </Icon>
);

export default GuaraniSign;