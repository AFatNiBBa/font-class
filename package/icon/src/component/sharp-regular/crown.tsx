
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=sharp-regular crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-5.8 11.6L214 212.1 192 256l-38.3-30.7L89.1 173.7 72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0l4.4 23.9L96 480l384 0 50.9-280.1 4.4-23.9c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-17.1 13.7-64.6 51.7L384 256l-22-43.9-47.2-94.4L309 106zM234.9 277.5L288 171.3l53.1 106.1 26.6 53.1L414 293.5l59.8-47.9L439.9 432l-303.9 0L102.2 245.6 162 293.5l46.4 37.1 26.6-53.1z" />
    </Icon>
);

export default Crown;