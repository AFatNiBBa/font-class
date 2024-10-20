
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-regular feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M171.3 165.6c36.7-36.7 99.8-65.2 169.4-85.2c41-11.8 81.7-20 116.2-25.3c-5.4 34.5-13.5 75.3-25.3 116.2c-3.6 12.5-7.5 24.8-11.6 36.8l-82.1 0 7.9-7.9 17-17-33.9-33.9-17 17L123.5 354.5c-12.3-21.8-15.4-48.9-9.8-79.4c7.5-41 30.2-82.1 57.6-109.6zM122.7 423.3c78 54.7 194.8 14.3 257.7-48.6c76.4-76.4 112.4-229.2 126.1-325.9c2.6-18.6 4.4-35.2 5.5-48.7c-13.5 1.1-30.1 2.9-48.7 5.5C366.6 19.2 213.8 55.2 137.4 131.6C74.5 194.5 34 311.4 88.7 389.3L18.2 459.8l-17 17 33.9 33.9 17-17 70.5-70.5zm34.8-34.8L193.9 352 334 352c-26.6 22.2-61.9 39.8-97.1 46.3c-30.6 5.6-57.6 2.5-79.4-9.8zM375.4 304l-133.4 0 48-48 111.2 0c-7.9 17.4-16.4 33.6-25.7 48z" />
    </Icon>
);

export default FeatherPointed;