
import { Icon } from "../../index";

/**
 * A component that renders the `helicopter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helicopter?s=regular helicopter}
 * @preview ![helicopter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/helicopter.svg)
 */
const Helicopter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M152 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l184 0 0 80-198.1 0L86.7 76.8C78.5 68.6 67.4 64 55.9 64C28.4 64 7.8 89.2 13.2 116.1l16.1 80.3c3.6 17.8 15.6 32.8 32.2 40.2l124.8 55.5 77.4 77.4c19.5 19.5 46 30.5 73.5 30.5L504 400c39.8 0 72-32.2 72-72l0-48c0-83.9-68.1-152-152-152l-40 0 0-80 168 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L152 0zM128 176l208 0 0 176c-14.4-.3-28.2-6.2-38.5-16.4L217 255c-2.1-2.1-4.5-3.8-7.2-5L80.9 192.8c-2.4-1.1-4.1-3.2-4.6-5.7L63.1 121 111 169c4.5 4.5 10.6 7 17 7zM504 352l-120 0 0-176 40 0c57.4 0 104 46.6 104 104l0 48c0 13.3-10.7 24-24 24zM631 474.7c10.4-8.3 12-23.4 3.7-33.7s-23.4-12-33.7-3.8l-26.9 21.5c-4.3 3.4-9.5 5.3-15 5.3L248 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l311.2 0c16.3 0 32.2-5.6 45-15.8L631 474.7z" />
    </Icon>
);

export default Helicopter;