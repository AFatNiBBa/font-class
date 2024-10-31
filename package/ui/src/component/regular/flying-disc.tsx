
import { Icon } from "../../index";

/**
 * A component that renders the `flying-disc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flying-disc?s=regular flying-disc}
 * @preview ![flying-disc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/flying-disc.svg)
 */
const FlyingDisc: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M390.4 89.6c7.9 7.9 16.9 31.4 .6 80.4c-15.3 45.9-49.5 101-100.7 152.2S183.9 407.6 138 422.9c-49 16.3-72.5 7.3-80.4-.6c-5.6-5.6-11.8-19.2-9-44.3c19.9 19.2 45.3 20.8 62.5 18.9c18.1-2 36.3-8.8 52.8-17c33.6-16.6 70.7-44.5 105.1-78.9s62.2-71.5 78.9-105.1c8.2-16.6 14.9-34.7 17-52.8c1.9-17.2 .3-42.6-18.9-62.5c25.1-2.8 38.7 3.3 44.3 9zM105.2 175.4C8.3 281.9-28.4 404.2 23.7 456.3C79 511.6 213.5 466.8 324.2 356.2S479.6 111 424.3 55.7C372.2 3.6 249.9 40.3 143.5 137.1c-6.6 6-13.2 12.2-19.7 18.7c-6.5 6.5-12.7 13-18.6 19.6zm35.6 32.2c5.4-6 11.1-11.9 17-17.8c5.9-5.9 11.9-11.6 17.9-17c57.9-52.3 116.2-78.4 135.5-59.1c21.4 21.4-12.7 90.1-76.1 153.4s-132.1 97.4-153.4 76.1c-19.4-19.4 6.8-77.7 59.1-135.6z" />
    </Icon>
);

export default FlyingDisc;