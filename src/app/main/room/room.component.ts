import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Api } from '../../service/api';
import { UserService } from '../../service/user.service';
import { PushService } from '../../service/push.service';
import { fromEvent } from 'rxjs';

@Component({
    templateUrl: 'room.component.html',
    styleUrls: ['room.component.scss']
})
export class RoomComponent implements OnDestroy, OnInit, AfterViewInit {

    private point: any;
    private optQueue = [];

    constructor(private api: Api, private userService: UserService, private push: PushService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.api.quitRoom(this.userService.id).subscribe();
    }

    ngAfterViewInit() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        fromEvent(canvas, 'mousedown').subscribe((evt: MouseEvent) => {
            this.point = this.getCoord(evt);
            this.emit('begin', {coord: this.point});
            // this.optQueue.push({
            //     opt: 'begin', coord: this.point
            // });
        });

        fromEvent(canvas, 'mousemove').subscribe((evt: MouseEvent) => {
            if (this.point) {
                context.beginPath();
                context.moveTo(this.point.x, this.point.y);
                const np = this.getCoord(evt);
                context.lineTo(np.x, np.y);
                context.stroke();
                this.point = np;
                this.emit('move', {coord: np});
                // this.optQueue.push({
                //     opt: 'move', coord: np
                // });
            }
        });

        fromEvent(canvas, 'mouseup').subscribe((evt: MouseEvent) => {
            this.point = null;
            this.emit('end', null);
        });
        fromEvent(canvas, 'mouseout').subscribe((evt: MouseEvent) => {
            this.point = null;
            this.emit('end', null);
        });
    }

    private getCoord(evt: MouseEvent) {
        const bounding = (evt.target as HTMLElement).getBoundingClientRect();
        const left = evt.pageX, top = evt.pageY;
        const x = left - bounding.left, y = top - bounding.top;
        return { x, y };
    }

    private emit(type: string, data: any) {
        this.push.emit('draw', {
            id: this.userService.id, data, type
        });
    }

    test() {
        this.push.emit('test', { a: 1 });
    }
}
