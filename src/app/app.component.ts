import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angapi';

  user: any;

  constructor(
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (err) => {
        this.toastr.error(err.status, 'There was a problem.');
      }
    );
  }
}
