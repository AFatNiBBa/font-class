
import { Icon } from "../../index";

/**
 * A component that renders the `ear` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=regular ear}
 * @preview ![ear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/ear.svg)
 */
const Ear: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192l0 176c0 53 43 96 96 96s96-43 96-96c0-21.7 10.9-42.6 29.8-54.8C309.7 287.5 336 242.8 336 192zm48 0c0 67.8-35.1 127.4-88.2 161.5c-4.9 3.2-7.8 8.6-7.8 14.5c0 79.5-64.5 144-144 144S0 447.5 0 368L0 192C0 86 86 0 192 0S384 86 384 192zm-256 0l0 20.2c0 3 1.7 5.8 4.4 7.2l14 7c18.1 9.1 29.5 27.6 29.5 47.8c0 15.9-7 30.9-19.2 41.1l-37.4 31.2c-10.2 8.5-25.3 7.1-33.8-3.1s-7.1-25.3 3.1-33.8L126 278.4c1.2-1 2-2.6 2-4.2c0-2.1-1.2-4-3-4.9l-14-7c-19-9.5-31-28.9-31-50.1L80 192c0-61.9 50.1-112 112-112s112 50.1 112 112l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8c0-35.3-28.7-64-64-64s-64 28.7-64 64z" />
    </Icon>
);

export default Ear;