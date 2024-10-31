
import { Icon } from "../../index";

/**
 * A component that renders the `pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=thin pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M395 25.9c12.5-12.5 32.8-12.5 45.3 0l45.8 45.8c12.5 12.5 12.5 32.8 0 45.3l-66.9 66.9L328.1 92.8 395 25.9zm-78.2 78.2l91.1 91.1L164.7 438.4c-10.4 10.4-23.3 18-37.4 22.2L19.8 492.2 51.4 384.7c4.2-14.1 11.8-27 22.2-37.4L316.8 104.1zM451.5 14.6c-18.7-18.7-49.1-18.7-67.9 0L62.3 336C50 348.3 41 363.5 36.1 380.2L.3 501.7c-.8 2.8-.1 5.8 2 7.9s5.1 2.8 7.9 2l121.6-35.8c16.7-4.9 31.9-13.9 44.2-26.2L497.4 128.3c18.7-18.7 18.7-49.1 0-67.9L451.5 14.6z" />
    </Icon>
);

export default Pen;