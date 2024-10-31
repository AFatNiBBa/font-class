
import { Icon } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=thin lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 368c-51.8 0-98.4-22.4-130.6-58.1C84.8 326.4 113.3 336 144 336l16 0c70.7 0 128-57.3 128-128l0-16c0-53-43-96-96-96s-96 43-96 96c0 30.9 25.1 56 56 56s56-25.1 56-56l0-8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 8c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-44.2 35.8-80 80-80s80 35.8 80 80l0 16c0 61.9-50.1 112-112 112l-16 0C73.3 320 16 262.7 16 192C16 94.8 94.8 16 192 16s176 78.8 176 176s-78.8 176-176 176zM0 192C0 298 86 384 192 384c50.1 0 95.8-19.2 130-50.7c.1 .1 .2 .2 .3 .4l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176c-.1-.1-.2-.2-.4-.3c31.5-34.2 50.7-79.9 50.7-130C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Lollipop;