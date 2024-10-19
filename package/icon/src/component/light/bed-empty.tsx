
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bed-empty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=light bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMTkySDMyVjQ4QzMyIDM5LjE5OSAyNC44MDEgMzIgMTYgMzJTMCAzOS4xOTkgMCA0OFY0NjRDMCA0NzIuODAxIDcuMTk5IDQ4MCAxNiA0ODBTMzIgNDcyLjgwMSAzMiA0NjRWNDE2SDYwOFY0NjRDNjA4IDQ3Mi44MDEgNjE1LjE5OSA0ODAgNjI0IDQ4MFM2NDAgNDcyLjgwMSA2NDAgNDY0VjMwNEM2NDAgMjQyLjE0NSA1ODkuODU1IDE5MiA1MjggMTkyWk02MDggMzg0SDMyVjM1Mkg2MDhWMzg0Wk02MDggMzIwSDMyVjIyNEg1MjhDNTcyLjEyNSAyMjQgNjA4IDI1OS44NzUgNjA4IDMwNFYzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BedEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M528 192H32V48C32 39.199 24.801 32 16 32S0 39.199 0 48V464C0 472.801 7.199 480 16 480S32 472.801 32 464V416H608V464C608 472.801 615.199 480 624 480S640 472.801 640 464V304C640 242.145 589.855 192 528 192ZM608 384H32V352H608V384ZM608 320H32V224H528C572.125 224 608 259.875 608 304V320Z" />
        </Icon>
    </>
}