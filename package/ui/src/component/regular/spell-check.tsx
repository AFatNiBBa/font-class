
import { Icon } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=regular spell-check}
 * @preview ![spell-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spell-check.svg)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M134.1 14.6C130.3 5.8 121.6 0 112 0s-18.3 5.8-22.1 14.6l-88 208c-5.2 12.2 .5 26.3 12.8 31.5s26.3-.5 31.5-12.8L56.8 216l110.3 0 10.7 25.4c5.2 12.2 19.2 17.9 31.5 12.8s17.9-19.2 12.8-31.5l-88-208zM146.9 168l-69.7 0L112 85.6 146.9 168zM256 24l0 104 0 104c0 13.3 10.7 24 24 24l92 0c42 0 76-34 76-76c0-24.6-11.7-46.4-29.8-60.3C426.9 107.3 432 92.2 432 76c0-42-34-76-76-76L280 0c-13.3 0-24 10.7-24 24zm100 80l-52 0 0-56 52 0c15.5 0 28 12.5 28 28s-12.5 28-28 28zm-52 48l52 0 16 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-68 0 0-56zM568.6 313.3c9.6-9.2 9.9-24.4 .7-33.9s-24.4-9.9-33.9-.7l-183 175.7L265 367c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L335 505c9.2 9.2 24.2 9.4 33.6 .3l200-192z" />
    </Icon>
);

export default SpellCheck;