
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=duotone bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128c0 8.2 3.1 16.4 9.4 22.6c53 53 106 106 159 159c11.3 11.3 22.6 22.6 33.9 33.9l159 159c12.5 12.5 32.8 12.5 45.3 0c12.2-12.2 12.5-31.8 .9-44.3c59.5-92.6 53.4-215.1-18.3-301.5c-15.2 15.2-30.3 30.3-45.5 45.5c47.3 60.7 53 143.3 17.1 209.3c-37.7-37.7-75.5-75.5-113.2-113.2c-11.3-11.3-22.6-22.6-33.9-33.9c-37.7-37.7-75.5-75.5-113.2-113.2c66-35.8 148.6-30.1 209.3 17.1l45.5-45.5C268.8 51.1 146.3 45 53.7 104.5c-12.6-11.6-32.1-11.3-44.3 .9C3.1 111.6 0 119.8 0 128z" />
        <path d="M511.7 18.9c1-5.2-.7-10.5-4.4-14.3S498.2-.7 493.1 .3l-128 24c-5.8 1.1-10.6 5.3-12.3 11s-.2 11.8 4 16l35 35L213.7 264.4l33.9 33.9L425.7 120.3l35 35c4.2 4.2 10.4 5.7 16 4s9.9-6.5 11-12.3l24-128zM202.3 343.6l-33.9-33.9-23.8 23.8L93.8 320.7c-8.2-2-16.8 .4-22.8 6.3L7 391c-6.1 6.1-8.5 15-6.2 23.4s8.9 14.8 17.3 16.9l50 12.5 12.5 50c2.1 8.4 8.5 15 16.9 17.3s17.3 0 23.4-6.2l64-64c6-6 8.4-14.6 6.3-22.8l-12.7-50.8 23.8-23.8z" />
    </Icon>
);

export default BowArrow;