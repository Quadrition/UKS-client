import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Branch } from 'src/app/model/Branch';
import { NewBranchDialogComponent } from '../../branch/new-branch-dialog/new-branch-dialog.component';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {
  public files: Array<{ text: string; icon: string }>;

  constructor() {
    this.files = [
      { text: 'README.MD', icon: 'text_snippet' },
      { text: 'index.html', icon: 'html' },
      { text: 'style.scss', icon: 'format_size' },
      { text: '.gitignore', icon: 'text_snippet' },
      { text: 'myHome.png', icon: 'image' },
      { text: 'routes.php', icon: 'code' },
      { text: 'viewPage.html', icon: 'html' },
      { text: 'directions.txt', icon: 'text_snippet' },
    ];
  }

  ngOnInit(): void {}
}
