
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=thin droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 496c-97.2 0-176-78.8-176-176c0-19.5 7.1-44.9 19.6-73.8c2.3-5.3 4.7-10.7 7.3-16.1l-12.9-10.2C140.2 256.8 128 292.1 128 320c0 106 86 192 192 192c53.3 0 101.5-21.7 136.2-56.7l-12.6-10C411.8 476.7 368.2 496 320 496zM345.4 11.7C339.4 4.2 330.5 0 320.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7c-12.5 15.9-36.2 46.6-61.9 83.7l12.6 9.9c25.6-37.1 49.3-67.9 61.8-83.7c2.8-3.5 7-5.6 11.9-5.6l1.8 0c4.9 0 9.1 2.1 11.9 5.6c18 22.8 59.3 76.6 95.9 135.7c18.3 29.6 35.3 60.2 47.7 88.8c8.9 20.7 15.1 39.5 17.9 55.7l17.6 13.9C508.1 223.6 381.2 57 345.4 11.7zM232 320c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 57.4 46.6 104 104 104c4.4 0 8-3.6 8-8s-3.6-8-8-8c-48.6 0-88-39.4-88-88zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default DropletSlash;