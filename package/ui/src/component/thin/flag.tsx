
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=thin flag}
 * @preview ![flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/flag.svg)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 64 0 383.5 0 400 0 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-108 112.3-28.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-291c0-17.8-18.8-29.4-34.7-21.5l-19.7 9.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L16 60 16 8zm0 68.5L136.8 46.3c34.4-8.6 70.7-4.6 102.4 11.2c50.8 25.4 110.6 25.4 161.5 0l19.7-9.8c5.3-2.7 11.6 1.2 11.6 7.2l0 291c0 6.7-4.1 12.6-10.4 15l-34.7 13c-42.1 15.8-88.8 13.3-129-6.8c-41.3-20.7-88.7-25.9-133.5-14.7L16 379.5l0-303z" />
    </Icon>
);

export default Flag;