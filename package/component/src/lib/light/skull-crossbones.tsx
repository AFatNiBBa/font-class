
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=light skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M300.1 198.4c-7.6 6.1-12.1 15.3-12.1 25l0 16.6c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-16.6c0-9.8-4.4-19-12.1-25C125.1 180.2 112 155 112 128c0-49.6 46.5-96 112-96s112 46.4 112 96c0 27-13.1 52.2-35.9 70.4zM320 240l0-16.6c29.5-23.4 48-57.5 48-95.4C368 57.3 303.5 0 224 0S80 57.3 80 128c0 37.9 18.5 72 48 95.4l0 16.6c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48zm126.5 57.3c-3.7-8-13.2-11.5-21.2-7.8L224 382.4 22.7 289.5c-8-3.7-17.5-.2-21.2 7.8s-.2 17.5 7.8 21.2L185.8 400 9.3 481.5c-8 3.7-11.5 13.2-7.8 21.2s13.2 11.5 21.2 7.8L224 417.6l201.3 92.9c8 3.7 17.5 .2 21.2-7.8s.2-17.5-7.8-21.2L262.2 400l176.5-81.5c8-3.7 11.5-13.2 7.8-21.2zM208 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default SkullCrossbones;