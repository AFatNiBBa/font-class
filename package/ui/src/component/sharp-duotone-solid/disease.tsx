
import { Icon, generic } from "../../index";

/**
 * A component that renders the `disease` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disease?s=sharp-duotone-solid disease}
 * @preview ![disease](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/disease.svg)
 */
const Disease: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.1 167.1c0 15.9 6.4 31.2 17.6 42.5l29.2 29.2c11 11 17.2 25.9 17.2 41.5c0 15.8-6.4 30.9-17.7 42L33.3 335.1C22.2 345.9 16 360.7 16 376.2c0 36.8 34.1 64.2 70.1 56.2l62.3-13.8c7.7-1.7 15.7-2.6 23.6-2.6l10 0c27.2 0 53.7 9.3 75 26.3L287.8 467c10.5 8.4 23.6 13 37 13c32.7 0 59.3-26.5 59.3-59.3l0-25.2c0-34.9 21.4-66.2 53.9-78.8l36.9-14.3c22.4-8.7 37.2-30.3 37.2-54.3c0-28.1-20.1-52.3-47.8-57.3l-28-5.1c-36.5-6.7-65.4-34.5-73.6-70.7l-7.1-31.5C348.9 53.4 322.1 32 291.3 32c-22 0-42.6 11-54.9 29.4L227 75.5c-21.3 32-59.4 48.5-97.3 42.1l-59.6-9.9C33.4 101.6 0 129.9 .1 167.1zM120 224l40-40 40 40-40 40-40-40zm128 96c13.3-13.3 26.7-26.7 40-40c13.3 13.3 26.7 26.7 40 40c-13.3 13.3-26.7 26.7-40 40l-40-40zm32-112c8-8 16-16 24-24c8 8 16 16 24 24l-24 24c-8-8-16-16-24-24z" />
        <path d="M304 232l-24-24 24-24 24 24-24 24zM288 360l-40-40 40-40 40 40-40 40z" />
    </Icon>
);

export default Disease;