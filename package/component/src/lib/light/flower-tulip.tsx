
import { Icon } from "../../index";

/**
 * A component that renders the `flower-tulip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flower-tulip?s=light flower-tulip}
 * @preview ![flower-tulip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flower-tulip.svg)
 */
const FlowerTulip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M268 5.4C264.9 2 260.6 0 256 0s-8.9 2-12 5.4L189.5 66.7 121.2 18.9c-4.9-3.4-11.3-3.8-16.6-1.1S96 26 96 32l0 128c0 70.7 57.3 128 128 128l16 0 0 108.6C200.8 331.5 129.5 288 48 288l-20 0c-15.5 0-28 12.5-28 28C0 424.2 87.8 512 196 512l44 0 16 0 16 0 44 0c108.2 0 196-87.8 196-196c0-15.5-12.5-28-28-28l-20 0c-81.5 0-152.8 43.5-192 108.6L272 288l16 0c70.7 0 128-57.3 128-128l0-128c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1L322.5 66.7 268 5.4zM256 256l-32 0c-53 0-96-43-96-96l0-97.3 54.8 38.4c6.7 4.7 15.7 3.6 21.1-2.5l52-58.5 52 58.5c5.4 6.1 14.5 7.1 21.1 2.5L384 62.7l0 97.3c0 53-43 96-96 96l-32 0zM196 480c-89.2 0-161.8-71.3-164-160l16 0c95.1 0 174.1 69.2 189.3 160L196 480zm120 0l-41.3 0c15.2-90.8 94.2-160 189.3-160l16 0c-2.1 88.7-74.7 160-164 160z" />
    </Icon>
);

export default FlowerTulip;