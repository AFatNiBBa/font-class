
import { Icon } from "../../index";

/**
 * A component that renders the `h4` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h4?s=regular h4}
 * @preview ![h4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/h4.svg)
 */
const H4: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M455.5 92.9L421.5 256 592 256l0-168c0-13.3 10.7-24 24-24s24 10.7 24 24l0 336c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-120-200 0c-7.2 0-14.1-3.3-18.6-8.9s-6.3-13-4.9-20l40-192c2.7-13 15.4-21.3 28.4-18.6s21.3 15.4 18.6 28.4zM24 64c13.3 0 24 10.7 24 24l0 136 224 0 0-136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160 0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-152L48 272l0 152c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 248 0 88C0 74.7 10.7 64 24 64z" />
    </Icon>
);

export default H4;