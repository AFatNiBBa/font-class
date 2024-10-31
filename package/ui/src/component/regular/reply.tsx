
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=regular reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 240l96 0c66.2 0 122 44.7 138.8 105.5c3.3-12.4 5.2-26.2 5.2-41.5c0-70.7-57.3-128-128-128l-112 0-24 0c-13.3 0-24-10.7-24-24l0-24 0-28.1L55.9 208 176 316.1l0-28.1 0-24c0-13.3 10.7-24 24-24l24 0zm0 48l0 48 0 16c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4s19 16.6 19 29.2l0 16 0 48 48 0 64 0c97.2 0 176 78.8 176 176c0 78-38.6 126.2-68.7 152.1c-4.1 3.5-8.1 6.6-11.7 9.3c-3.2 2.4-6.2 4.4-8.9 6.2c-4.5 3-8.3 5.1-10.8 6.5c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-6.8 3.6-13.2 8.3-18.1c.5-.5 .9-.9 1.4-1.4c2.4-2.3 5.1-5.1 7.7-8.6c1.7-2.3 3.4-5 5-7.9c5.3-9.7 9.5-22.9 9.5-40.2c0-53-43-96-96-96l-48 0-48 0z" />
    </Icon>
);

export default Reply;