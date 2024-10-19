
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-forward` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-forward?s=thin rotate-forward}
 * @preview ![rotate-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYuNzAzIDMzLjkwNkM0ODcuMjY2IDMwLjA0NyA0NzcuMDQ3IDMyLjA5NCA0NjkuODU5IDM5LjI1TDQwOC42NjQgMTAwLjQ0NUw0MDYuMjk3IDk3LjYwOUMzMTguOTIyIDEwLjI2NiAxNzYuODU5IDEwLjI2NiA4OS40ODQgOTcuNjA5QzIuMTcyIDE4NC45MzggMi4xNzIgMzI3LjA2MyA4OS40ODQgNDE0LjQwNkMxMzMuMTcyIDQ1OC4wNjIgMTkwLjUxNiA0NzkuOTA2IDI0Ny44OTEgNDc5LjkwNlMzNjIuNjA5IDQ1OC4wNjIgNDA2LjI5NyA0MTQuNDA2QzQwOS40MjIgNDExLjI4MSA0MDkuNDIyIDQwNi4yMTkgNDA2LjI5NyA0MDMuMDk0QzQwMy4yMDMgNDAwIDM5OC4xNDEgMzk5LjkzOCAzOTQuOTg0IDQwMy4wOTRDMzEzLjg1OSA0ODQuMTI1IDE4MS45MjIgNDg0LjE1NiAxMDAuNzk3IDQwMy4wOTRDMTkuNzAzIDMyMS45NjkgMTkuNzAzIDE5MC4wMTYgMTAwLjc5NyAxMDguOTIyQzE4MS44NTkgMjcuODc1IDMxMy43OTcgMjcuODEyIDM5NC40ODQgMTA4LjM3NUwzOTcuMzE4IDExMS43OTFMMzI3LjE0MSAxODEuOTY5QzMxOS45NTMgMTg5LjE0MSAzMTcuOTIyIDE5OS40MjIgMzIxLjc5NyAyMDguNzk3UzMzNC4zOTEgMjI0IDM0NC41NDcgMjI0SDQ4Ny4yNjZDNTAwLjg1OSAyMjQgNTExLjg5MSAyMTIuOTUzIDUxMS44OTEgMTk5LjM3NVY1Ni42NTZDNTExLjg5MSA0Ni41MTYgNTA2LjA3OCAzNy43OTcgNDk2LjcwMyAzMy45MDZaTTQ5NS44OTEgMTk5LjM3NUM0OTUuODkxIDIwNC4xMjUgNDkyLjAxNiAyMDggNDg3LjI2NiAyMDhIMzQ0LjU0N0MzMzkuMjAzIDIwOCAzMzcuMTA5IDIwMy45MjIgMzM2LjU3OCAyMDIuNjg4QzMzNi4wNzggMjAxLjQzOCAzMzQuNjcyIDE5Ny4wNjMgMzM4LjQ1MyAxOTMuMjgxTDQ4MS4xNzIgNTAuNTYzQzQ4My4xNzIgNDguNTYzIDQ4NS4zMjggNDguMDE2IDQ4Ny4xMDkgNDguMDE2QzQ4OC43MDMgNDguMDE2IDQ4OS45ODQgNDguNDUzIDQ5MC41NzggNDguNjg4QzQ5MS44MjggNDkuMjAzIDQ5NS44OTEgNTEuMzEyIDQ5NS44OTEgNTYuNjU2VjE5OS4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
const RotateForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496.703 33.906C487.266 30.047 477.047 32.094 469.859 39.25L408.664 100.445L406.297 97.609C318.922 10.266 176.859 10.266 89.484 97.609C2.172 184.938 2.172 327.063 89.484 414.406C133.172 458.062 190.516 479.906 247.891 479.906S362.609 458.062 406.297 414.406C409.422 411.281 409.422 406.219 406.297 403.094C403.203 400 398.141 399.938 394.984 403.094C313.859 484.125 181.922 484.156 100.797 403.094C19.703 321.969 19.703 190.016 100.797 108.922C181.859 27.875 313.797 27.812 394.484 108.375L397.318 111.791L327.141 181.969C319.953 189.141 317.922 199.422 321.797 208.797S334.391 224 344.547 224H487.266C500.859 224 511.891 212.953 511.891 199.375V56.656C511.891 46.516 506.078 37.797 496.703 33.906ZM495.891 199.375C495.891 204.125 492.016 208 487.266 208H344.547C339.203 208 337.109 203.922 336.578 202.688C336.078 201.438 334.672 197.063 338.453 193.281L481.172 50.563C483.172 48.563 485.328 48.016 487.109 48.016C488.703 48.016 489.984 48.453 490.578 48.688C491.828 49.203 495.891 51.312 495.891 56.656V199.375Z" />
    </Icon>
);

export default RotateForward;