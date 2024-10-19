
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=duotone i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA0MzJDMzIwIDQ1OC41IDI5OC41IDQ4MCAyNzIgNDgwSDQ4QzIxLjUgNDgwIDAgNDU4LjUgMCA0MzJTMjEuNSAzODQgNDggMzg0SDExMlYxMjhINDhDMjEuNSAxMjggMCAxMDYuNSAwIDgwUzIxLjUgMzIgNDggMzJIMjcyQzI5OC41IDMyIDMyMCA1My41IDMyMCA4MFMyOTguNSAxMjggMjcyIDEyOEgyMDhWMzg0SDI3MkMyOTguNSAzODQgMzIwIDQwNS41IDMyMCA0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M320 432C320 458.5 298.5 480 272 480H48C21.5 480 0 458.5 0 432S21.5 384 48 384H112V128H48C21.5 128 0 106.5 0 80S21.5 32 48 32H272C298.5 32 320 53.5 320 80S298.5 128 272 128H208V384H272C298.5 384 320 405.5 320 432Z" />
    </Icon>
);

export default I;