
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=sharp-solid flag}
 * @preview ![flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJMNjQgMCAwIDAgMCAzMiAwIDY0IDAgMzY4IDAgNDgwbDAgMzIgNjQgMCAwLTMyIDAtMTI4IDY0LjMtMTYuMWM0MS4xLTEwLjMgODQuNi01LjUgMTIyLjUgMTMuNGM0NC4yIDIyLjEgOTUuNSAyNC44IDE0MS43IDcuNEw0NDggMzM2bDAtMzIwTDM5My42IDQzLjJjLTQ2LjMgMjMuMi0xMDAuOCAyMy4yLTE0Ny4xIDBjLTM1LjEtMTcuNi03NS40LTIyLTExMy41LTEyLjVMNjQgNDhsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 64 0 368 0 480l0 32 64 0 0-32 0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4L448 336l0-320L393.6 43.2c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
    </Icon>
);

export default Flag;