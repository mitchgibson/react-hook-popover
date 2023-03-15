import { Theme } from './Theme';

export const theme: Theme = {
  avatar: {
    container: 'avatar placeholder',
    inner: 'bg-neutral-focus text-neutral-content rounded-full',
    image: '',
    size: {
      xs: 'w-8',
      sm: 'w-12',
      md: 'w-16',
      lg: 'w-24',
      xl: 'w-32',
    },
    defaults: {
      size: 'md',
    },
  },
  backdrop: {
    base: 'fixed top-0 right-0 left-0 z-[100] h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    show: {
      true: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
      false: 'hidden',
    },
    content: {
      base: 'relative h-full w-full max-h-full max-w-full md:h-auto flex',
      position: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start',
      },
      defaults: {
        position: 'center',
      },
    },
    blur: {
      true: 'backdrop-blur-sm',
      false: '',
    },
    contrast: {
      true: 'backdrop-contrast-50',
      false: '',
    },
    sepia: {
      true: 'backdrop-sepia',
      false: '',
    },
  },
  button: {
    base: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
    size: {
      xs: 'px-3 py-2 text-xs',
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-2.5',
      lg: 'px-5 py-3 text-base',
      xl: 'px-6 py-3.5',
    },
    disabled: {
      true: 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed',
    },
    defaults: {
      size: 'md',
    },
  },
  code: {
    base: 'bg-gray-200 rounded-lg p-4 overflow-x-auto',
    code: 'font-mono text-sm',
  },
  flexCol: {
    base: 'flex flex-col',
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-5',
    },
    align: {
      'end-center': 'items-center justify-end',
      'end-start': 'items-start justify-end',
      'end-end': 'items-end justify-end',
      'end-stretch': 'items-stretch justify-end',
      'center-center': 'items-center justify-center',
      'center-start': 'items-start justify-center',
      'center-end': 'items-end justify-center',
      'center-stretch': 'items-stretch justify-center',
      'space-around-stretch': 'items-stretch justify-around',
      'space-between-stretch': 'items-stretch justify-between',
      'space-evenly-stretch': 'items-stretch justify-evenly',
      'start-center': 'items-center justify-start',
      'start-start': 'items-start justify-start',
      'start-end': 'items-end justify-start',
      'start-stretch': 'items-stretch justify-start',
    },
    defaults: {
      gap: 'md',
      align: 'center-center',
    },
  },
  flexRow: {
    base: 'flex flex-row',
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
      xl: 'gap-5',
    },
    align: {
      'end-center': 'items-center justify-end',
      'end-start': 'items-start justify-end',
      'end-end': 'items-end justify-end',
      'end-stretch': 'items-stretch justify-end',
      'center-center': 'items-center justify-center',
      'center-start': 'items-start justify-center',
      'center-end': 'items-end justify-center',
      'center-stretch': 'items-stretch justify-center',
      'space-around-stretch': 'items-stretch justify-around',
      'space-between-stretch': 'items-stretch justify-between',
      'space-evenly-stretch': 'items-stretch justify-evenly',
      'start-center': 'items-center justify-start',
      'start-start': 'items-start justify-start',
      'start-end': 'items-end justify-start',
      'start-stretch': 'items-stretch justify-start',
    },
    defaults: {
      gap: 'md',
      align: 'center-center',
    },
  },
  input: {
    container: 'relative w-full',
    input:
      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  },
  label: {
    base: 'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
  },
  list: {
    base: 'bg-white rounded-lg border border-gray-200 text-gray-900 overflow-y-auto h-96 w-full',
    item: {
      base: 'cursor-pointer hover:hover:border-2 hover:drop-shadow-lg',
      inner: 'px-6 py-2 border-b border-gray-200 w-full rounded-t-lg',
      active: {
        true: 'bg-blue-700 text-white dark:bg-gray-800',
        false:
          'hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500',
      },
    },
  },
  loader: {
    circle: {
      container: 'flex items-center justify-center space-x-2',
      inner: 'w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600',
    },
    dots: {
      container: 'flex items-center justify-center space-x-2',
      0: 'w-4 h-4 rounded-full animate-pulse bg-blue-600',
      1: 'w-4 h-4 rounded-full animate-pulse bg-blue-600',
      2: 'w-4 h-4 rounded-full animate-pulse bg-blue-600',
    },
  },
  modal: {
    content: {
      base: 'relative h-full w-full p-4 md:h-auto flex',
      inner: {
        base: 'relative rounded-lg bg-white shadow dark:bg-gray-700 grow',
        size: {
          xs: 'max-w-xs min-w-[20rem]',
          sm: 'max-w-sm min-w-[24rem]',
          md: 'max-w-md min-w-[28rem]',
          lg: 'max-w-lg min-w-[32rem]',
          xl: 'max-w-xl min-w-[36rem]',
          xxl: 'max-w-2xl min-w-[42rem]',
          auto: 'maw-w-auto',
        },
        defaults: {
          size: 'md',
        },
      },
    },
    body: {
      base: 'p-6',
    },
    header: {
      base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
    },
    footer: {
      base: 'space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
    },
    defaults: {
      position: 'center',
    },
  },
  pager: {
    container: 'flex items-center',
    text: {
      container: 'text-gray-700 text-xs',
      spacing: 'ml-2 mr-2',
    },
    icon: {
      container: 'm-2 text-gray-700',
    },
  },
  textarea: {
    base: 'block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    size: {
      xs: 'h-[4rem]',
      sm: 'h-[8rem]',
      md: 'h-[20rem]',
      lg: 'h-[28rem]',
      xl: 'h-[40rem]',
    },
    defaults: {
      size: 'md',
    },
  },
  scrollArea: {
    base: 'h-full w-full',
  },
  select: {
    container: 'form-control w-full max-w-xs relative',
    select:
      'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
  },
};

export default theme;
