
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-duotone-solid hexagon-image}
 * @preview ![hexagon-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggNDgwbDI1NiAwTDUxMiAyNTYgMzg0IDMyIDEyOCAzMiAwIDI1NnptMTA3LjEgNzkuOWMxNy4xLTE4LjcgMzQuMS0zNy40IDUxLjItNTYuMWM1LjgtNi4zIDExLjUtMTIuNiAxNy4zLTE5YzUuOSA2LjIgMTEuOCAxMi40IDE3LjggMTguNmMxMyAxMy41IDI1LjkgMjcuMSAzOC45IDQwLjZsNzEuNi04Ni4yYzYuMi03LjQgMTIuMy0xNC44IDE4LjUtMjIuMmM2LjIgNy40IDEyLjMgMTQuOCAxOC41IDIyLjJsNzIuNiA4Ny40TDM1My41IDQyNC45bC0xOTUgMC01MS40LTg5ek0yMzIgMTYwYTQwIDQwIDAgMSAxIC04MCAwIDQwIDQwIDAgMSAxIDgwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMDcuMSAzMzUuOWw1MS40IDg5IDE5NSAwIDU5LjktMTAzLjdMMzIyLjMgMjExLjYgMjMyLjIgMzIwbC01Ni42LTU5LjItNjguNSA3NXoiLz48L3N2Zz4=|width=32|height=32)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 480l256 0L512 256 384 32 128 32 0 256zm107.1 79.9c17.1-18.7 34.1-37.4 51.2-56.1c5.8-6.3 11.5-12.6 17.3-19c5.9 6.2 11.8 12.4 17.8 18.6c13 13.5 25.9 27.1 38.9 40.6l71.6-86.2c6.2-7.4 12.3-14.8 18.5-22.2c6.2 7.4 12.3 14.8 18.5 22.2l72.6 87.4L353.5 424.9l-195 0-51.4-89zM232 160a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
            <path d="M107.1 335.9l51.4 89 195 0 59.9-103.7L322.3 211.6 232.2 320l-56.6-59.2-68.5 75z" />
    </Icon>
);

export default HexagonImage;