
import { Icon } from "../../index";

/**
 * A component that renders the `car-bolt` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bolt?s=regular car-bolt}
 * @preview ![car-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/car-bolt.svg)
 */
const CarBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M127.7 106.8L103.4 176l24.6 0 0 48-32 0c-26.5 0-48 21.5-48 48l0 80 416 0 0-80c0-26.5-21.5-48-48-48l-32 0 0-48 24.6 0-24.2-69.2c-5.6-16-20.8-26.8-37.8-26.8L165.4 80c-17 0-32.1 10.7-37.8 26.8zm-79.6 82L82.3 90.9C94.7 55.6 128 32 165.4 32l181.2 0c37.4 0 70.7 23.6 83.1 58.9l34.3 97.9C492.6 205.4 512 236.4 512 272l0 80 0 48 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56L48 400l0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56 0-48 0-80c0-35.6 19.3-66.6 48.1-83.2zM112 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm256 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM315.2 116.6c5.3 5.2 6.3 13.3 2.5 19.6L284.3 192l51.7 0c7.1 0 13.4 4.7 15.4 11.6s-.8 14.2-6.9 18l-128 80c-6.3 3.9-14.4 3-19.7-2.2s-6.3-13.3-2.5-19.6L227.7 224 176 224c-7.1 0-13.4-4.7-15.4-11.6s.8-14.2 6.9-18l128-80c6.3-3.9 14.4-3 19.7 2.2z" />
    </Icon>
);

export default CarBolt;