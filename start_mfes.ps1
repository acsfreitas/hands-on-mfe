$projects = @("composer", "body", "header")

foreach ($project in $projects) {
    Write-Output "Start project $project..."
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $project; yarn start"
}
