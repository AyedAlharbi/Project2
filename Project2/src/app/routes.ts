import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from "./register/register.component";
import { SubmitComponent } from "./submit/submit.component";

export const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
    { path: 'submit', component: SubmitComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];