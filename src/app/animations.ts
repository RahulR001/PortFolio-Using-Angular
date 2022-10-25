import { trigger, state,style, animate, transition, keyframes } from "@angular/animations";

export const profilein=trigger('profilein', [
    state('void', style({
        opacity: 0,
        transform:'translatex(100px)'
    })),
    state('*', style({
        opacity: 1,
    })),
    transition('void<=>*', [
        animate('1s')
    ])
])

export const slidein1 = trigger('slidein1', [
    state('void', style({
        opacity: 0,
         transform:'translatex(-100%)'
    })),
    state('*', style({
        opacity:1,
    })),
    transition('void<=>*', [
        animate('0.5s')
    ])
])

export const slidein2 = trigger('slidein2', [
    state('void', style({
        opacity: 0,
         transform:'translateX(-100%)'
    })),
    state('*', style({
        opacity:1,
    })),
    transition('void<=>*', [
        animate('0.7s')
    ])
])

export const slidein3 = trigger('slidein3', [
    state('void', style({
         transform:'translatex(-100%)'
    })),
    transition('void<=>*', [
        animate('.9s')
    ])
])
export const slideup = trigger('slideup', [
    state('void', style({
        opacity:0,
        transform:'translatey(100px)'
    })),
    transition('void<=>*', [
        animate('1s', )
    ])
])

export const viewin = trigger('viewin', [
    state('void', style({
        opacity:0
    })),
    state('*', style({
        opacity:1
    })),
    transition('void=>*',animate('2s'))
])


export const cardin1 = trigger('cardin1', [
    state('void', style({
        opacity: 0,
        transform: 'translatex(-100px)'
    })),
    state('*', style({
        opacity: 1,
    })),
    transition('void<=>*', [
        animate('1s')
    ])
])
export const cardin2 = trigger('cardin2', [
    state('void', style({
        opacity: 0,
        transform: 'translatex(100px)'
    })),
    state('*', style({
        opacity: 1,
    })),
    transition('void<=>*', [
        animate('1s')
    ])
])
export const cardin3 = trigger('cardin3', [
    state('void', style({
        opacity: 0,
        
    })),
    state('*', style({
        opacity: 1,
    })),
    transition('void<=>*', [
        animate('1s')
    ])
])
export const slideinright = trigger('slideinright', [
    state('void', style({
        opacity: 0,
        transform:'translatex(100px)'
    })),
    state('*', style({
        opacity:1
    })),
    transition('void<=>*', [
    
        animate('0.7s')
])
])