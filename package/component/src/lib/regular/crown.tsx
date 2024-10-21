
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=regular crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34l-5.8 11.6L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7l-72-57.6L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0l4.4 23.9L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6l41.4-227.5 4.4-23.9c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-17.1 13.7-72 57.6c-15.9 12.7-39.5 7.5-48.6-10.7L314.8 117.7 309 106zM133.7 418.9L102.2 245.6l28.9 23.1c39.8 31.8 98.8 18.9 121.5-26.7L288 171.3l35.4 70.7c22.8 45.6 81.8 58.5 121.5 26.7l28.9-23.1L442.3 418.9c-1.4 7.6-8 13.1-15.7 13.1l-277.2 0c-7.7 0-14.4-5.5-15.7-13.1z" />
    </Icon>
);

export default Crown;