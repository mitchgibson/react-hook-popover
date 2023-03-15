import {
    AvatarTheme,
    BackdropTheme,
    ButtonTheme, CodeTheme, FlexColTheme, FlexRowTheme, InputTheme, LabelTheme,
    ListTheme, LoaderTheme,
    ModalTheme, PagerTheme, ScrollAreaTheme, SelectTheme,
    TextareaTheme
} from '../components';

export interface Theme {
    avatar:Partial<AvatarTheme>;
    backdrop:Partial<BackdropTheme>;
    button:Partial<ButtonTheme>;
    code:Partial<CodeTheme>;
    flexCol:Partial<FlexColTheme>;
    flexRow:Partial<FlexRowTheme>;
    input:Partial<InputTheme>;
    label:Partial<LabelTheme>;
    list:Partial<ListTheme>;
    loader:Partial<LoaderTheme>;
    modal:Partial<ModalTheme>;
    pager:Partial<PagerTheme>;
    textarea:Partial<TextareaTheme>;
    scrollArea:Partial<ScrollAreaTheme>;
    select:Partial<SelectTheme>;
}
