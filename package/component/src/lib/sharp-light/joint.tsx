
import { Icon } from "../../index";

/**
 * A component that renders the `joint` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joint?s=sharp-light joint}
 * @preview ![joint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/joint.svg)
 */
const Joint: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 0l32 0 0 43c0 42.4 16.9 83.1 46.9 113.1l21 21c18 18 28.1 42.4 28.1 67.9l0 43-32 0 0-43c0-17-6.7-33.3-18.7-45.3l-21-21C436.2 142.7 416 93.9 416 43l0-43zM640 288l-32 0 0-43c0-42.4-16.9-83.1-46.9-113.1l-21-21C522.1 92.9 512 68.4 512 43l0-43 32 0 0 43c0 17 6.7 33.3 18.7 45.3l21 21c36 36 56.2 84.8 56.2 135.8l0 43zM30.9 450.3C10.8 439.7 0 432 0 432s10.8-7.7 30.9-18.3C75.6 390.1 166.6 352 288 352l320 0 32 0 0 32 0 96 0 32-32 0-320 0c-121.4 0-212.4-38.1-257.1-61.7zM66 432c7.2 3.3 15.2 6.8 23.9 10.3c47 18.8 115 37.7 198.1 37.7l35.2 0-71.5-85.8-7.1-8.5c-63.5 5.1-116.2 20.6-154.7 36c-8.7 3.5-16.7 6.9-23.9 10.3zm417.2 48l-71.5-85.8L403.2 384 288 384l-3.2 0 71.5 85.7 8.5 10.2 118.3 0zm33.1-10.2l8.5 10.2 83.2 0 0-96-163.2 0 71.5 85.8z" />
    </Icon>
);

export default Joint;