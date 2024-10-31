
import { Icon } from "../../index";

/**
 * A component that renders the `melon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon?s=sharp-thin melon}
 * @preview ![melon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/melon.svg)
 */
const Melon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256c0-58.5-20.9-112.1-55.7-153.8c3.6 48.3-1.3 153-93.2 244.9s-196.6 96.8-244.9 93.2C143.9 475.1 197.5 496 256 496c132.5 0 240-107.5 240-240zM75.3 414c1.5-50.3 13.4-173 89.5-249.1C250.1 79.6 362.8 72.2 412 73.6C370 37.7 315.5 16 256 16C123.5 16 16 123.5 16 256c0 60.5 22.4 115.8 59.3 158zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM101.8 422.6c14.8 1.2 35.8 1.6 60.6-1.6c49.4-6.5 113.5-27.5 172.3-86.3s79.8-122.9 86.3-172.3c3.3-24.8 2.8-45.8 1.6-60.6c-.3-3.8-.7-7.2-1.1-10.2c-3.4-.2-7.4-.4-11.9-.5c-15.9-.3-38.3 .3-64.1 4.3c-51.6 8-115.6 29.3-168.2 81.9c-45.2 45.2-66.6 109-76.6 163.3c-4.9 26.9-6.9 50.9-7.6 68.1c-.2 4.9-.3 9.3-.4 13c2.7 .3 5.7 .6 9 .9z" />
    </Icon>
);

export default Melon;