
import { Icon } from "../../index";

/**
 * A component that renders the `gear-code` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-code?s=sharp-solid gear-code}
 * @preview ![gear-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gear-code.svg)
 */
const GearCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 0L312 0l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512l-112 0-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zm87.8 162.6l2.6-15.8-31.6-5.3-2.6 15.8-32 192-2.6 15.8 31.6 5.3 2.6-15.8 32-192zM187.3 227.3L198.6 216 176 193.4l-11.3 11.3-40 40L113.4 256l11.3 11.3 40 40L176 318.6 198.6 296l-11.3-11.3L158.6 256l28.7-28.7zm160-22.6L336 193.4 313.4 216l11.3 11.3L353.4 256l-28.7 28.7L313.4 296 336 318.6l11.3-11.3 40-40L398.6 256l-11.3-11.3-40-40z" />
    </Icon>
);

export default GearCode;